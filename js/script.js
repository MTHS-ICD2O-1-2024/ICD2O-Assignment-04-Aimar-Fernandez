// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Aimar Fernandez
// Created on: May 2025
// This file contains the JS functions for index.html


"use strict"

function myButtonClicked() {
  const ONTARIO_SALES_TAX = 0.13
  let monthlyPrice = 0
  let discount = 0
  const numberOfMonths = parseInt(document.getElementById("months-number").value)
  const basicMembership = document.getElementById("basic").checked
  if (basicMembership == true) {
    monthlyPrice = 20
  }
  else {
    monthlyPrice = 35
  }
  if (numberOfMonths >= 12) {
    discount = 0.30
  }
  else if (numberOfMonths >= 6) {
    discount = 0.10
  }
  else {
    // No discount
  }
  const subtotalPrice = (monthlyPrice * numberOfMonths) - (monthlyPrice * numberOfMonths * discount)
  const totalPrice = subtotalPrice + (subtotalPrice * ONTARIO_SALES_TAX)
  document.getElementById("answer").innerHTML = 
    "<p>Subtotal: $" + subtotalPrice.toFixed(2) + "<br />Total: $" + totalPrice.toFixed(2)
}