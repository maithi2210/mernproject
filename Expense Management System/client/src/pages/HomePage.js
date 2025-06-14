import React, { useState, useEffect } from "react";
import { Form, Input, Modal, Select, Table, message, DatePicker } from "antd";
import {
  UnorderedListOutlined,
  AreaChartOutlined,
  EditOutlined,
  DeleteOutlined,
} from "@ant-design/icons";
import Layout from "../components/Layout/Layout";
import axios from "axios";
import Spinner from "../components/Spinner";
import moment from "moment";
import Analytics from "../components/Analytics";

const { RangePicker } = DatePicker;

const HomePage = () => {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [allTransaction, setAllTransaction] = useState([]);
  const [frequency, setFrequency] = useState("7");
  const [selectedDate, setSelectedDate] = useState([]);
  const [type, setType] = useState("all");
  const [viewData, setViewData] = useState("table");
  const [editable, setEdittable] = useState(null);
  const [form] = Form.useForm(); // Form instance for reset

  const columns = [
    {
      title: "Date",
      dataIndex: "date",
      render: (text) => <span>{moment(text).format("YYYY-MM-DD")}</span>,
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Category",
      dataIndex: "category",
    },
    {
      title: "Reference",
      dataIndex: "reference",
    },
    {
      title: "Actions",
      render: (text, record) => (
        <div>
          <EditOutlined
            onClick={() => {
              setEdittable(record);
              setShowModal(true);
            }}
          />
          <DeleteOutlined
            className="mx-2"
            onClick={() => {
              handleDelete(record);
            }}
          />
        </div>
      ),
    },
  ];

  useEffect(() => {
    const getAllTransaction = async () => {
      try {
        const user = JSON.parse(localStorage.getItem("user"));
        setLoading(true);
        const res = await axios.post("/transactions/get-transaction", {
          userid: user._id,
          frequency,
          type,
          selectedDate: selectedDate.length
            ? [
                selectedDate[0].startOf("day").toISOString(),
                selectedDate[1].endOf("day").toISOString(),
              ]
            : [],
        });
        setLoading(false);
        setAllTransaction(res.data);
      } catch (error) {
        setLoading(false);
        message.error("Fetch Issue with Transaction");
      }
    };
    getAllTransaction();
  }, [frequency, selectedDate, type]);

  const handleDelete = async (record) => {
    try {
      setLoading(true);
      await axios.post("/transactions/delete-transaction", {
        transactionId: record._id,
      });
      setLoading(false);
      message.success("Transaction Deleted");
    } catch (error) {
      setLoading(false);
      console.log(error);
      message.error("Unable to delete");
    }
  };
  const handleSubmit = async (values) => {
    try {
      const user = JSON.parse(localStorage.getItem("user"));
      setLoading(true);
      const formattedValues = {
        ...values,
        userid: user._id,
        date: moment(values.date).toISOString(),
      };

      if (editable) {
        await axios.post("/transactions/edit-transaction", {
          payload: formattedValues,
          transactionId: editable._id,
        });
        message.success("Transaction Updated Successfully");
      } else {
        await axios.post("/transactions/add-transaction", formattedValues);
        message.success("Transaction Added Successfully");
      }

      setLoading(false);
      setShowModal(false);
      setEdittable(null);
      form.resetFields(); // Reset form after submit
    } catch (error) {
      setLoading(false);
      message.error("Failed to add or edit transaction");
    }
  };

  return (
    <Layout>
      {loading && <Spinner />}
      <div className="filters">
        <div>
          <h6>Select Frequency</h6>
          <Select value={frequency} onChange={(values) => setFrequency(values)}>
            <Select.Option value="7">Last 1 Week</Select.Option>
            <Select.Option value="31">Last 1 Month</Select.Option>
            <Select.Option value="365">Last 1 Year</Select.Option>
            <Select.Option value="custom">Custom</Select.Option>
          </Select>
          {frequency === "custom" && (
            <RangePicker
              value={selectedDate}
              onChange={(values) => setSelectedDate(values)}
            />
          )}
        </div>
        <div>
          <h6>Select Type</h6>
          <Select value={type} onChange={(values) => setType(values)}>
            <Select.Option value="all">ALL</Select.Option>
            <Select.Option value="income">INCOME</Select.Option>
            <Select.Option value="expense">EXPENSE</Select.Option>
          </Select>
        </div>

        <div className="switch-icons">
          <UnorderedListOutlined
            className={`mx-2 ${
              viewData === "table" ? "active-icon" : "inactive-icon"
            }`}
            onClick={() => setViewData("table")}
          />
          <AreaChartOutlined
            className={`mx-2 ${
              viewData === "analytics" ? "active-icon" : "inactive-icon"
            }`}
            onClick={() => setViewData("analytics")}
          />
        </div>
        <div>
          <button
            className="btn btn-primary"
            onClick={() => setShowModal(true)}
          >
            Add New
          </button>
        </div>
      </div>
      <div className="content">
        {viewData === "table" ? (
          <Table columns={columns} dataSource={allTransaction} />
        ) : (
          <Analytics allTransaction={allTransaction} />
        )}
      </div>
      <Modal
        title={editable ? "Edit Transaction" : "Add Transaction"}
        open={showModal}
        onCancel={() => {
          form.resetFields();
          setShowModal(false);
          setEdittable(null);
        }}
        footer={false}
      >
        <Form
          form={form} // Use form instance
          layout="vertical"
          onFinish={handleSubmit}
          initialValues={{
            ...editable,
            date: editable ? moment(editable.date) : null,
          }}
        >
          <Form.Item
            label="Amount"
            name="amount"
            rules={[{ required: true, message: "Please enter the amount" }]}
          >
            <Input type="number" />
          </Form.Item>
          <Form.Item
            label="Type"
            name="type"
            rules={[{ required: true, message: "Please select a type" }]}
          >
            <Select>
              <Select.Option value="income">Income</Select.Option>
              <Select.Option value="expense">Expense</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Category"
            name="category"
            rules={[{ required: true, message: "Please select a category" }]}
          >
            <Select>
              <Select.Option value="salary">Salary</Select.Option>
              <Select.Option value="project">Project</Select.Option>
              <Select.Option value="tax">Tax</Select.Option>
              <Select.Option value="fees">Fees</Select.Option>
              <Select.Option value="medical">Medical</Select.Option>
              <Select.Option value="food">Food</Select.Option>
              <Select.Option value="movie">Movie</Select.Option>
              <Select.Option value="clothing">Clothing</Select.Option>
              <Select.Option value="bills">Bills</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Reference" name="reference">
            <Input type="text" />
          </Form.Item>
          <Form.Item label="Description" name="description">
            <Input type="text" />
          </Form.Item>
          <Form.Item
            label="Date"
            name="date"
            rules={[{ required: true, message: "Please select a date" }]}
          >
            <DatePicker />
          </Form.Item>
          <div className="d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              SAVE
            </button>
          </div>
        </Form>
      </Modal>
    </Layout>
  );
};

export default HomePage;
