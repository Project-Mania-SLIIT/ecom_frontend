/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import Navbar from '../../../components/navbar'
import Footer from '../../../components/footer'
import { Table } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import axios from "axios";
import UpdFeedbackModal from '../../../components/modals/Feedback/UpdFeedbackModal'
import DelFeedbackModal from '../../../components/modals/Feedback/DelFeedbackModal'

export default function index() {
    const [feedback, setFeedback] = useState([]);

    const userId = localStorage.getItem("user_id");

    useEffect(() => {
        axios
          .get(`http://localhost:5003/api/feedback/grfb/${userId}`)
          .then((res) => {
            setFeedback(res.data);
          })
          .catch((err) => {
            console.log(err);
          });
      });

  return (
    <div>
        <Navbar/>
      <div className='text-center'>
        <br/>
      <h1>Reviews</h1>
      <br/>
      <br/><br/><br/>
      <Table striped>
        <thead>
          <tr>
            <th>Product Image</th>
            <th>Product Name</th>
            <th>Email</th>
            <th>Satisfaction Rate</th>
            <th>Message</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
        {/* {feedback.feedbackId} */}
        {feedback.map((fb) => (
            <tr key={fb.feedbackId}>
              <td><img src={fb.productImage} style={{ width: "50px", height:"50px" }}/></td>
              <td>{fb.productName}</td>
              <td>{fb.userEmail}</td>
              <td>{fb.satisfaction_rate}</td>
              <td>{fb.message}</td>
              <td>
                <UpdFeedbackModal fbid={fb.feedbackId}/>
                <DelFeedbackModal fbid={fb.feedbackId}/>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
    <Footer/>
    </div>
  )
}
