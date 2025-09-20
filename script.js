{\rtf1\ansi\ansicpg1252\cocoartf2822
\cocoatextscaling0\cocoaplatform0{\fonttbl\f0\fswiss\fcharset0 Helvetica;}
{\colortbl;\red255\green255\blue255;}
{\*\expandedcolortbl;;}
\paperw11900\paperh16840\margl1440\margr1440\vieww11520\viewh8400\viewkind0
\pard\tx720\tx1440\tx2160\tx2880\tx3600\tx4320\tx5040\tx5760\tx6480\tx7200\tx7920\tx8640\pardirnatural\partightenfactor0

\f0\fs24 \cf0 // Sample script to handle comment form submission\
document.querySelector("form").addEventListener("submit", function(event) \{\
  event.preventDefault();  // Prevent the form from submitting\
  const comment = document.querySelector("textarea").value;\
  if(comment) \{\
    alert("Your comment has been submitted!");\
    // You can send the comment to a server or save it to a database here\
  \} else \{\
    alert("Please enter a comment before submitting.");\
  \}\
\});\
}