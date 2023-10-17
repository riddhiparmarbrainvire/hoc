import React from "react";
import ErrorBoundary from "./hoc/ErrorBoundary";
import TestComponent from "./components/TestComponent";

export default function App() {
  return (
    <ErrorBoundary>
      <TestComponent />
    </ErrorBoundary>
  );
}
