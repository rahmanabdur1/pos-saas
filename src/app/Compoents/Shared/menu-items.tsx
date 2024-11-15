import {
  PiShoppingCartDuotone,

} from "react-icons/pi";

export const menuItems = [
  // label start
  {
    icon: <PiShoppingCartDuotone />,
    href: "/dashboard",
    name: "Dashboard",
  },
 
 
  {
    name: "Quotation",
    href: "/Quotatio",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "New Quotation",
        href: "/quotation/new-quotation",
        badge: "",
      },

      {
        name: "All Question",
        href: "/quotation/all-quotation",
        badge: "",
      },
    
    ],
  },


    // Sales
    {
      name: "Sales",
      href: "/Sales",
      icon: <PiShoppingCartDuotone />,
      dropdownItems: [
        {
          name: "POS Sale",
          href: "/sales/pos-sale",
          badge: "",
        },
        {
          name: "New Sale",
          href: "/sales/new-sale",
          badge: "",
        },
        {
          name: "All Sales",
          href: "/sales/all-sales",
          badge: "",
        },
        {
          name: "All Sales Return",
          href: "/sales/all-sales-return",
          badge: "",
        },
      ],
    },
  


    // Customer
  {
    name: "Customer",
    href: "/Customer",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "New Customer",
        href: "/customer/new-customer",
        badge: "",
      },
      {
        name: "All Customer",
        href: "/customer/all-customer",
        badge: "",
      },
      {
        name: "All Credit Customer",
        href: "/customer/all-credit-customer",
        badge: "",
      },
      {
        name: "All Paid Customer",
        href: "/customer/all-paid-customer",
        badge: "",
      },
      {
        name: "All Deposit Customer",
        href: "/customer/all-deposit-customer",
        badge: "",
      },
    ],
  },

  // Supplier
  {
    name: "Supplier",
    icon: <PiShoppingCartDuotone />,
    href: "/Supplier",
    dropdownItems: [
      {
        name: "New Supplier",
        href: "/supplier/new-supplier",
        badge: "",
      },
      {
        name: "All Supplier",
        href: "/supplier/all-supplier",
        badge: "",
      },
      {
        name: "All Credit Supplier",
        href: "/supplier/all-credit-supplier",
        badge: "",
      },
      {
        name: "All Paid Supplier",
        href: "/supplier/all-paid-supplier",
        badge: "",
      },
      {
        name: "All Deposit Supplier",
        href: "/supplier/all-deposit-supplier",
        badge: "",
      },
    ],
  },

  // Product
  {
    name: "Product",
    href: "/Product",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "New Product",
        href: "/product/new-product",
        badge: "",
      },
      {
        name: "All Product",
        href: "/product/all-product",
        badge: "",
      },
      {
        name: "Product Category",
        href: "/product/category",
        badge: "",
      },
      {
        name: "Product Brand",
        href: "/product/brand",
        badge: "",
      },
      {
        name: "Product Unit",
        href: "/product/unit",
        badge: "",
      },
    ],
  },

  // Purchase
  {
    name: "Purchase",
    href: "/Purchase",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "New Purchase",
        href: "/purchase/new-purchase",
        badge: "",
      },
      {
        name: "All Purchase",
        href: "/purchase/all-purchase",
        badge: "",
      },
      {
        name: "All Purchase Return",
        href: "/purchase/all-purchase-return",
        badge: "",
      },
    ],
  },

  // Expense
  {
    name: "Expense",
    href: "/Expense",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "New Expense",
        href: "/expense/new-expense",
        badge: "",
      },
      {
        name: "All Expense",
        href: "/expense/all-expense",
        badge: "",
      },
      {
        name: "Category",
        href: "/expense/category",
        badge: "",
      },
    ],
  },

  // Report
  {
    name: "Report",
    icon: <PiShoppingCartDuotone />,
    href: "/Report",
    dropdownItems: [
      {
        name: "Stock Report",
        href: "/report/stock-report",
        badge: "",
      },
      {
        name: "Sales Report",
        href: "/report/sales-report",
        badge: "",
      },
      {
        name: "Expense Report",
        href: "/report/expense-report",
        badge: "",
      },
    ],
  },

  // Users
  {
    name: "Users",
    href: "/Users/new-user",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "New User",
        href: "/users/new-user",
        badge: "",
      },
      {
        name: "All Users (User-wise and Role Access)",
        href: "/users/all-users",
        badge: "",
      },
      {
        name: "User Role",
        href: "/users/user-role",
        badge: "",
      },
      {
        name: "User Profile",
        href: "/users/user-profile",
        badge: "",
      },
    ],
  },

  // Upload Library
  {
    name: "Upload Library",
    href: "/Upload-library",
    icon: <PiShoppingCartDuotone />,
    dropdownItems: [
      {
        name: "Add New",
        href: "/upload-library/add-new",
        badge: "",
      },
      {
        name: "All Library",
        href: "/upload-library/all-library",
        badge: "",
      },
    ],
  },

  // Support Tickets
  {
    name: "Support Tickets",
    icon: <PiShoppingCartDuotone />,
    href: "/support-tickets",
    badge: "",
  },

  // Authentication
  {
    name: "Login",
    icon: <PiShoppingCartDuotone />,
    href: "/login",
    badge: "",
  },
  {
    name: "Register",
    icon: <PiShoppingCartDuotone />,
    href: "/register",
    badge: "",
  },


];


