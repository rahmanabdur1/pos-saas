"use client"

import { store } from "@/redux/store";
import Header from "../Compoents/Shared/Header";
import Sidebar from "../Compoents/Shared/Sidebar";
import { Provider } from 'react-redux';


export default function LayoutUser({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
    <main className="flex min-h-screen flex-grow">
    <Sidebar className="fixed hidden xl:block dark:bg-gray-50" />
    <Header />
    <div className="flex  w-full flex-col mt-20  xl:ms-[270px] xl:w-[calc(100%-270px)] 2xl:ms-72 2xl:w-[calc(100%-288px)]"> 
      <div className="">
        {children}
      </div>
    </div>
  </main>
  </Provider>
  );
}
