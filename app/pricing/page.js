import Link from "next/link";

const plans = [
  {
    name: "Starter",
    price: "$0",
    features: ["Up to 3 people", "10 projects", "Community support"],
  },
  {
    name: "Team",
    price: "$8",
    featured: true,
    features: ["Unlimited people", "Unlimited projects", "Email support"],
  },
  {
    name: "Business",
    price: "$16",
    features: ["Everything in Team", "SSO", "Priority support"],
  },
];

export const metadata = { title: "Pricing · Trellis" };

export default function PricingPage() {
  return (
    <>
      <h1>Simple pricing for 2025</h1>
      <p className="lead">Start free, and upgrade when your team grows.</p>

      <div className="plans">
        {plans.map((plan) => (
          <div className={`card plan${plan.featured ? " plan-featured" : ""}`} key={plan.name}>
            <h2>{plan.name}</h2>
            <p className="plan-price">
              {plan.price} <span>per person / month</span>
            </p>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
            <Link href="/onboarding" className={plan.featured ? "btn" : "btn btn-secondary"}>
              Get started
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}
