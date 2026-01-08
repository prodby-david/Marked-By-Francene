"use client";

import { Check, Lock } from "lucide-react";
import { paymentMethods } from "../data/bookingData";

interface PaymentStepProps {
  selectedMethod: string | null;
  onSelect: (methodId: string) => void;
}

export default function PaymentStep({
  selectedMethod,
  onSelect,
}: PaymentStepProps) {
  return (
    <section>
      <h2 className="text-sm font-semibold text-heading-color uppercase tracking-wide mb-4">
        4. Payment Method
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {paymentMethods.map(method => {
          const isDisabled = !method.available;
          const isSelected = selectedMethod === method.id;

          return (
            <button
              key={method.id}
              type="button"
              disabled={isDisabled}
              title={isDisabled ? "This payment method is not available yet" : ""}
              onClick={() => !isDisabled && onSelect(method.id)}
              className={`
                relative p-4 rounded-xl border transition-all duration-200
                flex flex-col items-center text-center
                ${
                  isSelected
                    ? "bg-gray-50 border-heading-color ring-1 ring-heading-color"
                    : "bg-white border-input-color"
                }
                ${
                  isDisabled
                    ? "opacity-50 cursor-not-allowed bg-gray-100"
                    : "hover:border-gray-400"
                }
              `}
            >
              {/* Icon */}
              <div
                className={`p-2 rounded-full mb-2 ${
                  isSelected
                    ? "bg-heading-color text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                <method.icon className="w-5 h-5" />
              </div>

              {/* Title */}
              <h3 className="font-semibold text-sm text-heading-color">
                {method.name}
              </h3>

              {/* Description */}
              <p className="text-xs text-label-color mt-1">
                {method.description}
              </p>

              {/* Selected */}
              {isSelected && !isDisabled && (
                <span className="absolute top-3 right-3">
                  <Check className="w-4 h-4 text-heading-color" />
                </span>
              )}

            </button>
          );
        })}
      </div>
    </section>
  );
}
