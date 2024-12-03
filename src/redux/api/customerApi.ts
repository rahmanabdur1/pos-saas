// redux/api/customerApi.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

interface Customer {
    customerID: string;
    firstName: string;
    lastName: string;
    companyName: string;
    designation: string;
    department: string;
    industry: string;
    email?: string;
    mobileNumber: string;
    phoneNumber: string;
    fax?: string;
    country: string;
    address: string;
    city: string;
    state: string;
    zipCode: string;
    taxNumber?: string;
    gstNumber?: string;
    previousDue?: string;
    customerType: string;
    sellType: string;
    currency: string;
    paymentTerms: string;
    image: string;
    alternativeContact?: {
      name?: string;
      phone?: string;
      email?: string;
    };
    bankDetails?: {
      bankName?: string;
      accountName?: string;
      accountNumber?: string;
      routingNumber?: string;
      branchName?: string;
    };
    billingAddress?: string;
    shippingAddress?: string;
}

export const customerApi = createApi({
  reducerPath: 'customerApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }), // Adjust the base URL for your API
  endpoints: (builder) => ({
    submitCustomerForm: builder.mutation<void, Customer>({
      query: (data) => ({ 
        url: '/submit-customer', // Adjust the API endpoint
        method: 'POST',
        body: data,

      }),
    
    }),
    fetchCustomers: builder.query<Customer[], void>({
      query: () => '/customers', // Adjust the endpoint to fetch customer data
    }),
  }),

});

export const { useSubmitCustomerFormMutation, useFetchCustomersQuery } = customerApi;
