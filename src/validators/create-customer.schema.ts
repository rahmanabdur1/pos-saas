import { z } from 'zod';

export const customerFormSchema = z.object({
  customerId: z.string().optional().default(() => `CUST-${Math.random().toString(36).substr(2, 9)}`), // Auto Generate Customer ID
  firstName: z.string().min(1, { message: 'First name is required' }),
  lastName: z.string().min(1, { message: 'Last name is required' }),
  companyName: z.string().optional(),
  designation: z.string().optional(),
  department: z.string().optional(),
  industry: z.string().optional(),
  multiEmailAddress: z.array(z.string().email({ message: 'Invalid email address' })).optional(),
  multiMobileNumber: z.array(z.string()).optional(),
  multiPhoneNumber: z.array(z.string()).optional(),
  fax: z.string().optional(),
  country: z.string().min(1, { message: 'Country is required' }),
  address: z.string().optional(),
  city: z.string().optional(),
  state: z.string().optional(),
  zipCode: z.string().optional(),
  taxNumber: z.string().optional(),
  gstNumber: z.string().optional(),
  previousDue: z.coerce.number().optional(),
  customerType: z.enum(['Individual', 'Business'], { message: 'Customer type is required' }),
  sellType: z.enum(['Retailer', 'Wholesaler', 'Dealer'], { message: 'Sell type is required' }),
  currency: z.string().min(1, { message: 'Currency is required' }),
  image: z.string().optional(),
  paymentTerms: z.string().optional(),

  // Optional fields
  alternativeContact: z.string().optional(),
  billingAddress: z.string().optional(),
  shippingAddress: z.string().optional(),
});

export type CreateCustomerInput = z.infer<typeof customerFormSchema>;
