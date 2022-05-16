import { useState } from "react";
import { Button, Toast, ToastContainer } from "react-bootstrap";
import { AiFillCheckCircle } from 'react-icons/ai';

export default function ToastNotif({ show , message }) {
    return (
        <>
            <ToastContainer className="p-3" position='top-center'>
                <Toast show={show}>
                    <Toast.Header closeButton={false}>
                        <AiFillCheckCircle className="text-success me-3"/>
                        <strong className="me-auto">Success</strong>
                    </Toast.Header>
                    <Toast.Body>{message}</Toast.Body>
                </Toast>
            </ToastContainer>
        </>
    )
}