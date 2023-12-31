import { ChartPieIcon } from "@heroicons/react/24/outline";
import AddBudget from "../UI/create-budget-form";
import BudgetList from "../UI/budget-list";
import { getBudgets } from "../lib/action";
import { auth } from "@/auth";

export default async function MainPage() {
  const session = await auth();
  const budgets = await getBudgets();
  const budgetsExists = budgets && budgets.length > 0;
  return (
    <div className="w-full max-w-screen-xl">
      <h1 className="flex items-center justify-center space-x-4 py-8 text-center text-2xl sm:p-8 md:text-4xl">
        <ChartPieIcon className="h-8 w-8" />
        <p>Budgets</p>
      </h1>

      {!budgetsExists ? (
        <div className="flex flex-col items-center justify-center py-8 text-center md:text-2xl">
          <span className="text-primary-500">Welcome to WiseSpend!</span>
          <span>Start tracking your expenses by creating a budget.</span>
        </div>
      ) : (
        <></>
      )}

      <AddBudget />

      {budgetsExists ? (
        <BudgetList budgets={budgets} myID={session?.user?.id || ""} />
      ) : (
        <></>
      )}
    </div>
  );
}
