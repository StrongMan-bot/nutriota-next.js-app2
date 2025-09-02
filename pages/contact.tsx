import React from 'react';
import Head from 'next/head';
import ContactUs from '../src/components/ContactUs';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - Get in Touch | Nutriota</title>
        <meta name="description" content="Have questions about our supplements? Contact Nutriota's expert team for personalized health and nutrition advice." />
        <meta name="keywords" content="contact nutriota, customer support, health questions, supplement advice" />
      </Head>
      <ContactUs />
    </>
  );
}

