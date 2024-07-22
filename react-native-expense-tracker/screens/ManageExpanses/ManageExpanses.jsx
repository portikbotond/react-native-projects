import { View} from "react-native";
import {s} from './ManageExpanses.style';
import {useContext, useLayoutEffect, useState} from "react";
import {IconButton} from "../../components/UI/IconButton/IconButton";
import {GlobalStyles} from "../../constants/styles";
import {ExpensesContext} from "../../store/expenses-context";
import {ExpenseForm} from "../../components/ManageExpense/ExpenseForm/ExpenseForm";
import {deleteExpense, storeExpense, updateExpense} from "../../util/http";
import {LoadingOverlay} from "../../components/UI/LoadingOverlay/LoadingOverlay";
import {ErrorOverlay} from "../../components/UI/ErrorOverlay/ErrorOverlay";

export const ManageExpanses = ({navigation,route}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(false);
  const editedExpenseId = route.params?.expenseId;
  const isEditing = !!editedExpenseId;
  const expenseCtx = useContext(ExpensesContext);

  const selectedExpense= expenseCtx.expenses.find((expense) => expense.id == editedExpenseId);

  useLayoutEffect(() => {
    navigation.setOptions({
      title: isEditing ? 'Edit Expanse' : 'Add Expense'
    })
  }, [navigation, isEditing]);

  if(isSubmitting) {
    return <LoadingOverlay />
  }

  if(error && !isSubmitting) {
    return <ErrorOverlay message={error} onConfirm={() => setError(null)} />
  }

  const deleteExpenseHandler = async () => {
    setIsSubmitting(true);
    try {
      await deleteExpense(editedExpenseId);
      expenseCtx.deleteExpense(editedExpenseId);
      navigation.goBack();
    } catch (e) {
      setError('Could not delete expense - please try again later');
    }
    setIsSubmitting(false);
  }

  const cancelHandler = () => {
    navigation.goBack();
  }

  const confirmHandler = async (expenseData) => {
    setIsSubmitting(true);
    try {
      if(isEditing) {
        expenseCtx.updateExpense(editedExpenseId, expenseData);
        await updateExpense(editedExpenseId, expenseData)
      } else {
        const id = await storeExpense(expenseData);
        expenseCtx.addExpense({...expenseData, id: id});
      }
      navigation.goBack();
    } catch (e) {
      setError('Could not save expense - please try again later');
      setIsSubmitting(false);
    }

  }

  return <View style={s.container}>
    <ExpenseForm
      onCancel={cancelHandler}
      onSubmit={confirmHandler}
      defaultValues={selectedExpense}
      submitButtonLabel={isEditing ? 'Update' : 'Add'}
    />
    {isEditing &&
      <View style={s.deleteContainer}>
        <IconButton icon="trash" color={GlobalStyles.colors.error500} size={36} onPress={deleteExpenseHandler}/>
      </View>}
  </View>
}
