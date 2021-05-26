import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';

import { CATEGORIES, MEALS } from '../data/dummy-data';

import MealList from '../components/MealList';
import Meal from '../models/meal';

const CategoryMealsScreen = (props) => {
  const catId = props.navigation.getParam('categoryId');

  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.indexOf(catId) >= 0
  );

  // const selectedCategory = CATEGORIES.find((cat) => cat.id === catId);

  return <MealList listData={displayedMeals} naigation={props.navigation} />;
};

CategoryMealsScreen.navigationOptions = (navigationData) => {
  const categoryId = navigationData.navigation.getParam('categoryId');

  const selectedCategory = CATEGORIES.find((cat) => cat.id === categoryId);

  return {
    headerTitle: selectedCategory.title,
  };
};

const styles = StyleSheet.create({});

export default CategoryMealsScreen;
