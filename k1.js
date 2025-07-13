javascript:(function () {
  function e(message, autoSend) {
    let textarea = document.querySelector(".el-textarea__inner");
    if (textarea) {
      textarea.focus();
      let start = textarea.selectionStart,
        end = textarea.selectionEnd,
        value = textarea.value;
      textarea.value = value.substring(0, start) + message + value.substring(end);
      textarea.selectionStart = textarea.selectionEnd = start + message.length;

      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      textarea.value += " ";
      textarea.dispatchEvent(new KeyboardEvent("keydown", { bubbles: true, key: " " }));
      textarea.dispatchEvent(new Event("input", { bubbles: true }));
      textarea.selectionStart = textarea.selectionEnd = textarea.value.length;

      if (autoSend) {
        setTimeout(() => {
          ["keydown", "keypress", "keyup"].forEach(type => {
            textarea.dispatchEvent(new KeyboardEvent(type, {
              key: "Enter",
              code: "Enter",
              which: 13,
              keyCode: 13,
              bubbles: true,
            }));
          });
        }, 500);
      }
    } else {
      alert("Messenger input field not found!");
    }
  }

  let wrapper = document.createElement("div");
  Object.assign(wrapper.style, {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    padding: "10px",
    background: "white",
    border: "2px solid black",
    zIndex: "10000",
    boxShadow: "0 0 10px gray",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    width: "480px",
    maxHeight: "90vh",
    overflow: "auto",
    cursor: "move",
    borderRadius: "8px"
  });

  let offsetX, offsetY, dragging = false;

  wrapper.addEventListener("mousedown", function (e) {
    dragging = true;
    offsetX = e.clientX - wrapper.getBoundingClientRect().left;
    offsetY = e.clientY - wrapper.getBoundingClientRect().top;
    document.body.style.userSelect = "none";
  });

  document.addEventListener("mousemove", function (e) {
    if (dragging) {
      wrapper.style.left = e.clientX - offsetX + "px";
      wrapper.style.top = e.clientY - offsetY + "px";
      wrapper.style.right = "auto";
      wrapper.style.bottom = "auto";
    }
  });

  document.addEventListener("mouseup", function () {
    dragging = false;
    document.body.style.userSelect = "";
  });

  let title1 = document.createElement("div");
  title1.innerText = "🔵 Auto-Send Messages";
  title1.style.fontWeight = "bold";
  wrapper.appendChild(title1);

  let autoGrid = document.createElement("div");
  Object.assign(autoGrid.style, {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px"
  });

  let autoMessages = [
    "প্রী অর্ডার নেওয়া হচ্ছে।",
    "শাড়ী টি ৯৪০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ৯৮০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১০৭০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১০৮০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১১৫০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১১৬০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১১৭০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১২৫০ টাকা প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১২৭০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১২৮০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১২৯০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৩৪৩ টাকা প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৩৫০ টাকা প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৪৫০ টাকা প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৪৮০ টাকা প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৪৮৫ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৬৬৫ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "শাড়ী টি ১৯৮০ টাকা অফার প্রাইস।\nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "ব্লাউজ প্রাইস আলাদা।\nসাথে ব্লাউজ নিতে চাচ্ছেন?",
    "কোনটি নিতে চাচ্ছেন?\nছবি বা স্ক্রিনশট দিবেন প্লিজ।",
    "কটন সিল্ক ম্যাটেরিয়াল এর ১৩.৫ হাত শাড়ি।",
    "সফট কটন  ম্যাটেরিয়াল ১৪ হাত শাড়ি।",
    "খাদি সিল্ক ম্যাটেরিয়াল ১৪ হাত শাড়ি।",
    "সফ্ট কোটা কটন , ১৪ হাত শাড়ি।",
    "সেমি মসলিন ম্যাটেরিয়াল ১৩ হাত শাড়ি।",
    "আপনার অর্ডার টি নির্ভুলভাবে দ্রুত প্রসেস এর জন্য যে যে প্রোডাক্ট গুলো নিতে চাচ্ছেন ডিটেইল সহ একসাথে আরেকবার ছবি দিন প্লীজ ।☺️",
    "আন্তরিক ভাবে দু:খিত, আপনার পছন্দকৃত প্রোডাক্টটি স্টক-আউট",
    "স্ট্যান্ডার্ড ডেলিভারী টাইম ৩ থেকে ৫ দিন ",
    "দুঃখিত আর কোনো কালার নেই। ",
    "দুঃখিত , কাস্টমাইজ হয় না।",
    "দুঃখিত ,আলাদা কোনো ছবি নেই।",
    "৭ থেকে ১০ দিন সময় লাগবে। ",
    "অর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "কুর্তি টি ৭৮০ টাকা।\nশুধুমাত্র ৩৮ ও ৪২ সাইজ আছে। \nকোন সাইজ নিতে চাচ্ছেন?",
    "কো ওর্ডস সেট টি ১২৫০ টাকা \n৩৬-৪২ সাইজ এ্যাভেইলেবল। \nকোন সাইজ নিতে চাচ্ছেন?"
  ];

  autoMessages.forEach((msg) => {
    let btn = document.createElement("button");
    btn.innerText = "📤 " + (msg.length > 20 ? msg.slice(0, 18) + "..." : msg);
    Object.assign(btn.style, {
      padding: "10px",
      fontSize: "14px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      color: "white",
      background: "green"
    });
    btn.onclick = () => e(msg, true);
    autoGrid.appendChild(btn);
  });

  wrapper.appendChild(autoGrid);

  let title2 = document.createElement("div");
  title2.innerText = "🟠 Non-Auto-Send Messages";
  title2.style.fontWeight = "bold";
  wrapper.appendChild(title2);

  let nonAutoGrid = document.createElement("div");
  Object.assign(nonAutoGrid.style, {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "10px"
  });

  let nonAutoMessages = [
    " শাড়ী টি      টাকা অফার প্রাইস। \nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    " শাড়ী টি      টাকা  \nঅর্ডার কনফার্ম করতে ফুল এড্রেস ও ফোন নম্বর দিন প্লিজ।",
    "ব্লাউজ টি শুধুমাত্র রেডিমেড হবে।\nপ্রাইস   টাকা।\n৩৬-৪২ সাইজ এ্যাভেইলেবল।\nকোন সাইজ নিতে চাচ্ছেন?",
    "ব্লাউজ পিস  ৬৫০  টাকা।\nরেডিমেড ব্লাউজ ৯৫০  টাকা। \nব্লাউজ পিস  নাকি রেডিমেড নিতে চাচ্ছেন।",
    "শাড়ী টি      টাকা অফার প্রাইস। \nব্লাউজ পিস  ৬৫০  টাকা।\nরেডিমেড ব্লাউজ ৯৫০  টাকা। \nব্লাউজ পিস  নাকি রেডিমেড নিতে চাচ্ছেন।"
  ];

  nonAutoMessages.forEach((msg) => {
    let btn = document.createElement("button");
    btn.innerText = "📝 " + (msg.length > 20 ? msg.slice(0, 18) + "..." : msg);
    Object.assign(btn.style, {
      padding: "10px",
      fontSize: "14px",
      borderRadius: "5px",
      cursor: "pointer",
      border: "none",
      color: "white",
      background: "orange"
    });
    btn.onclick = () => e(msg, false);
    nonAutoGrid.appendChild(btn);
  });

  wrapper.appendChild(nonAutoGrid);

  let close = document.createElement("button");
  close.innerText = "❌ Close";
  Object.assign(close.style, {
    padding: "10px",
    background: "red",
    color: "white",
    fontWeight: "bold",
    fontSize: "14px",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  });
  close.onclick = () => wrapper.remove();
  wrapper.appendChild(close);

  document.body.appendChild(wrapper);
})();
