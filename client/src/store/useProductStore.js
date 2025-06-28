import { create } from "zustand";

export const useProductStore = create((set) => ({
  products: [],
  loading: false,
  error: null,
  currentProduct: null,

  addProduct: async () =>{} ,
  fetchProducts: async () =>{} ,
  fetchProduct: async () =>{} ,
  updateProduct: async () =>{} ,
  deleteProduct: async () =>{} ,

}));
