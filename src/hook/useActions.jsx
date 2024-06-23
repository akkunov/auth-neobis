import React from "react";
import {bindActionCreators} from "@reduxjs/toolkit";
import {useDispatch} from "react-redux";
import * as actions from "../store/authSlice.js";

const actionsAll = {...actions}
export const useActions = () => {
    const dispatch = useDispatch();
    return React.useMemo(() => bindActionCreators(actionsAll, dispatch), [dispatch]);
};
