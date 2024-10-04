import React, { useState } from "react";

const BookingPolicies = () => {
  const [activeTab, setActiveTab] = useState<string>("Liability Limitations");

  const handleTabClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Left sidebar */}
      <nav className="w-full md:w-64 bg-[#EBF9FB] p-6 space-y-4 md:space-y-8">
        <h2 className="font-bold text-lg md:text-xl">
          Booking and Payment Policies
        </h2>
        <ul className="space-y-2">
          {[
            "Liability Limitations",
            "Changes in Itineraries",
            "Eligibility",
            "Cancellations & Refunds",
            "Traveler Responsibilities",
          ].map((tab) => (
            <li
              key={tab}
              className={`cursor-pointer ${
                activeTab === tab
                  ? "font-semibold text-blue-600"
                  : "text-gray-700"
              }`}
              onClick={() => handleTabClick(tab)}
            >
              {tab}
            </li>
          ))}
        </ul>
      </nav>

      {/* Right content area */}
      <main className="flex-1 p-6 md:p-8">
        <h1 className="text-2xl md:text-3xl font-bold mb-4 md:mb-6">
          Booking and Payment Policies
        </h1>

        {/* Conditional Content Based on Active Tab */}
        <section className="mb-6 md:mb-8">
          {activeTab === "Liability Limitations" && (
            <>
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Liability Limitations
              </h2>
              <p className="text-gray-700">
                It is strongly recommended that travelers are covered by the
                required amount of travel insurance during any trip. Travelers
                should check with their travel agent or insurance provider for
                details on policy coverage.
              </p>
            </>
          )}

          {activeTab === "Changes in Itineraries" && (
            <>
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Changes in Itineraries
              </h2>
              <p className="text-gray-700">
                We reserve the right to make changes to any of the Vacation
                Components for reasons beyond our control. In such cases, we
                will make reasonable efforts to provide comparable alternatives.
              </p>
            </>
          )}

          {activeTab === "Eligibility" && (
            <>
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Eligibility
              </h2>
              <p className="text-gray-700">
                Participants must be at least 18 years of age to book a trip.
                Travelers under 18 must be accompanied by a parent or guardian.
                Some tours may have specific age restrictions.
              </p>
            </>
          )}

          {activeTab === "Cancellations & Refunds" && (
            <>
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Cancellations & Refunds
              </h2>
              <p className="text-gray-700">
                Our cancellation policy allows for refunds under specific
                conditions. Please review our terms for details on how to
                request a refund and any applicable fees.
              </p>
            </>
          )}

          {activeTab === "Traveler Responsibilities" && (
            <>
              <h2 className="text-lg md:text-xl font-semibold mb-3 md:mb-4">
                Traveler Responsibilities
              </h2>
              <p className="text-gray-700">
                Travelers are responsible for their own safety and adhering to
                all regulations during the trip. Failure to comply with
                guidelines may result in additional charges or penalties.
              </p>
            </>
          )}
        </section>
      </main>
    </div>
  );
};

export default BookingPolicies;
