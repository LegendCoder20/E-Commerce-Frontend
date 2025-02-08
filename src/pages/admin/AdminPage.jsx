import React, {useEffect} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  fetchAllUsers,
  fetchAllSellers,
  fetchAllProducts,
} from "../../features/Admin/adminSlice";

function AdminPage() {
  const dispatch = useDispatch();
  const {allUsers, allSellers, allProducts} = useSelector(
    (state) => state.admin
  );

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await dispatch(fetchAllUsers());
      console.log("USERS from inside function", users.payload);
    };
    fetchUsers();
  }, [dispatch]);

  useEffect(() => {
    console.log("Updated allUsers:", allUsers);
  }, [allUsers]);

  return <>Hello</>;
}

export default AdminPage;
