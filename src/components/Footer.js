import React from 'react';
import { Typography, Box, Link } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.main',
        height: '10vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        paddingBottom: '0.6%',
      }}
    >
      <Typography variant={'h8'} color={'text.main'} fontSize={13} pr={1}>
        Created by Shane Gray &copy; 2021
      </Typography>
      <Typography variant={'h8'} color={'text.main'} fontSize={13}>
        &#x2759;
      </Typography>

      <Typography variant={'h8'} color={'text.main'} fontSize={13} pl={1}>
        Logo Created by{' '}
        <Link
          sx={{ textDecoration: 'none', color: 'text.main' }}
          target="_blank"
          href="https://www.linkedin.com/in/william-paris-jr-692415154/"
        >
          William Paris
        </Link>{' '}
        &copy; 2021
      </Typography>
    </Box>
  );
};

export default Footer;
