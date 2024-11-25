/*This page is written by Yusheng Lun.*/

import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import './transaction.css';
import { FaEnvelope, FaPhone } from "react-icons/fa"; // Import Font Awesome icons


const Item = styled(Paper)(({}) => ({
  backgroundColor: '#005AA0',
  color: '#ffffff',
  padding: '16px',
  borderRadius: '4px',
}));

const Transaction = () => {
  const data = [
    { id: 'A1B2C3D', type: 'Buy', asset: 'Bitcoin', price: '45000', date: '2023-09-01 12:34:56', status: 'Completed' },
    { id: 'E2F3G4H', type: 'Sell', asset: 'Ethereum', price: '3000', date: '2023-09-01 13:14:22', status: 'Pending' },
    { id: 'I3J4K5L', type: 'Buy', asset: 'Dogecoin', price: '0.25', date: '2023-09-01 14:05:09', status: 'Failed' },
	{ id: 'E2F3G4H', type: 'Sell', asset: 'Ethereum', price: '3000', date: '2023-09-01 13:14:22', status: 'Pending' },
    { id: 'I3J4K5L', type: 'Buy', asset: 'Dogecoin', price: '0.25', date: '2023-09-01 14:05:09', status: 'Failed' },
    { id: 'M4N5O6P', type: 'Sell', asset: 'NFT', price: '200', date: '2023-09-01 15:45:30', status: 'Completed' },
    { id: 'Q5R6S7T', type: 'Buy', asset: 'Assets', price: '1000', date: '2023-09-01 16:20:45', status: 'Pending' }
  ];

  return (
    <><Box className='container'>
		  <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center' }} className='box'>
			  <Stack spacing={6}>
				  <Item>
					  <h1>Transaction History</h1>
				  </Item>
				  <Item>
					  <Table className='table'>
						  <TableHead>
							  <TableRow>
								  <TableCell>Transaction ID</TableCell>
								  <TableCell>Type</TableCell>
								  <TableCell>Asset</TableCell>
								  <TableCell>Price</TableCell>
								  <TableCell>Date</TableCell>
								  <TableCell>Status</TableCell>
							  </TableRow>
						  </TableHead>
						  <TableBody>
							  {data.map((row) => (
								  <TableRow key={row.id}>
									  <TableCell>{row.id}</TableCell>
									  <TableCell>{row.type}</TableCell>
									  <TableCell>{row.asset}</TableCell>
									  <TableCell>{row.price}</TableCell>
									  <TableCell>{row.date}</TableCell>
									  <TableCell>{row.status}</TableCell>
								  </TableRow>
							  ))}
						  </TableBody>
					  </Table>
				  </Item>
			  </Stack>
		  </Box>
	  </Box><footer className="footer">
			  <div className="footer-content">
				  <div className="left-section">
					  <p>DEX</p> {/* Brand name */}
				  </div>
				  <div className="middle-section">
					  <p>
						  <FaEnvelope /> info@example.com {/* Email */}
					  </p>
				  </div>
				  <div className="right-section">
					  <p>
						  <FaPhone /> +1 (123) 456-7890 {/* Phone number */}
					  </p>
				  </div>
			  </div>
			  <p>&copy; 2023 Trading Platform. All rights reserved.</p>
		  </footer></>
);
};


export default Transaction;

