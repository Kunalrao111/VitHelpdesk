"use client";
import { useState } from "react";
import "../styles/FAQ.css";

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("SUBSCRIPTIONS");
  const [expandedItems, setExpandedItems] = useState({
    "subscription-discounts": true,
    "pause-cancel": false,
    "manage-account": false,
  });

  const toggleItem = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="faq-container">
      {/* Header */}
      

      <div className="divider"></div>

      {/* Main Content */}
      <main className="main-content">
        <h1 className="faq-title">FAQ</h1>

        {/* Tabs */}
        <div className="tabs">
          {["PRODUCT", "SUBSCRIPTIONS", "SHIPPING", "RETURNS + CHANGES", "OTHER"].map((tab) => (
            <button 
              key={tab}
              className={`tab ${activeTab === tab ? "active" : ""}`}
              onClick={() => setActiveTab(tab)}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* FAQ Content */}
        <div className="faq-content">
          {activeTab === "SUBSCRIPTIONS" && (
            <div className="faq-items">
              {[
                { id: "subscription-discounts", question: "DO YOU OFFER SUBSCRIPTION DISCOUNTS?", answer: 
                  `Of course we do. What kind of self-respecting online brand would we be if we didn't? Plus-- 
                  and this is completely objective--our products are specifically designed to be enjoyed every day, 
                  so, if that's what you're doing, you should be rewarded for it. By us. Hence, the discount.
                  Subscriptions are 10% off the single purchase price and there are sometimes additional discounts 
                  if you purchase multiple quantities. You should be able to easily scan the price/glass breakdown 
                  in each product page.` 
                },
                { id: "pause-cancel", question: "CAN I PAUSE OR CANCEL MY SUBSCRIPTION?", answer: 
                  "Yes, you can pause or cancel your subscription at any time through your account settings. There are no penalties or fees for cancellation."
                },
                { id: "manage-account", question: "WILL I BE ABLE TO EASILY MANAGE MY ACCOUNT?", answer: 
                  "Yes, you can easily manage all aspects of your account including shipping address, payment information, and subscription preferences through your account dashboard."
                }
              ].map(({ id, question, answer }) => (
                <div key={id} className="faq-item">
                  <div className="faq-question" onClick={() => toggleItem(id)}>
                    <span className="indicator">{expandedItems[id] ? "-" : "+"}</span>
                    <h3>{question}</h3>
                  </div>
                  {expandedItems[id] && <div className="faq-answer"><p>{answer}</p></div>}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Contact Section */}
        <div className="contact-section">
          <h2 className="contact-title">HAVE SOMETHING NOT BEING ADDRESSED?</h2>
          <button className="contact-button">CONTACT US</button>
        </div>
      </main>
    </div>
  );
}
