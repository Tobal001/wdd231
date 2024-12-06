async function getMembershipLevelData() {
  try { const data = {
    membershipLevels: [
      {
        "id": "np-membership",
        "name": "Non-Profit Membership",
        "description": "This level is specifically designed for non-profit organizations looking to establish their online presence and expand their reach.",
        "features": [
          "Discounted pricing for non-profits",
          "Customizable donation forms and widgets",
          "Access to community management tools",
          "Free domain registration for one year",
          "Email support during business hours"
        ],
        "pricing": "$29/month",
        "targetAudience": "Non-profit organizations, charities, and foundations",
        "cta": "Sign up today and empower your cause with modern tools!"
      },
      {
        "id": "bronze-membership",
        "name": "Bronze Membership",
        "description": "Perfect for small businesses or individuals just starting their journey in e-commerce.",
        "features": [
          "Up to 50 product listings",
          "Basic website templates for quick setup",
          "Inventory and order management system",
          "Integration with popular payment gateways",
          "Community support and knowledge base"
        ],
        "pricing": "$49/month",
        "targetAudience": "Entrepreneurs, small retailers, and start-ups",
        "cta": "Start selling online today with our Bronze Membership plan!"
      },
      {
        "id": "silver-membership",
        "name": "Silver Membership",
        "description": "An intermediate plan for growing businesses looking to scale up their online presence.",
        "features": [
          "Up to 200 product listings",
          "Advanced analytics and reporting tools",
          "Email marketing tools with automated campaigns",
          "Discount and promotional code features",
          "24/7 chat and email support"
        ],
        "pricing": "$99/month",
        "targetAudience": "Medium-sized businesses, expanding retailers, and e-commerce professionals",
        "cta": "Scale your business with the Silver Membership and drive more sales!"
      },
      {
        "id": "gold-membership",
        "name": "Gold Membership",
        "description": "Designed for established businesses that require premium features and dedicated support.",
        "features": [
          "Unlimited product listings",
          "Customizable website templates with branding support",
          "Priority customer support with a dedicated account manager",
          "Multi-channel integration (e.g., Amazon, eBay, social media stores)",
          "AI-driven recommendations and upselling tools",
          "Exclusive webinars and strategy sessions with industry experts"
        ],
        "pricing": "$199/month",
        "targetAudience": "Large-scale retailers and enterprises",
        "cta": "Unlock your full potential with Gold Membership and achieve unmatched growth!"
      },
    ],
  };

  attachModalEvents(data.membershipLevels);
  } catch (error) {
    console.error("Error fetching membership levels:", error);
  }
}

function attachModalEvents(membershipLevels) {
  const modal = document.getElementById("membership-level-modal");
  const modalTitle = document.getElementById("modal-title");
  const modalDescription = document.getElementById("modal-description");
  const modalFeatures = document.getElementById("modal-features");
  const modalPricing = document.getElementById("modal-pricing");
  const modalAudience = document.getElementById("modal-audience");
  const closeModalBtn = document.getElementById("close-modal");

  // Attach event listeners to buttons
  document.querySelectorAll(".btn").forEach((button) => {
    button.addEventListener("click", () => {
      const membershipId = button.id.replace("-member", "-membership");
      const level = membershipLevels.find((l) => l.id === membershipId);

      if (level) {
        modalTitle.textContent = level.name;
        modalDescription.textContent = level.description;
        modalPricing.textContent = level.pricing;
        modalAudience.textContent = level.targetAudience;

        // Populate features list
        modalFeatures.innerHTML = "";
        level.features.forEach((feature) => {
          const li = document.createElement("li");
          li.textContent = feature;
          modalFeatures.appendChild(li);
        });

        modal.showModal();
      }
    });
  });

  // Close modal
  closeModalBtn.addEventListener("click", () => modal.close());
  modal.addEventListener("click", (event) => {
    if (event.target === modal) {
      modal.close();
    }
  });
}

// Load data on page load
document.addEventListener("DOMContentLoaded", () => {
  getMembershipLevelData();
});
