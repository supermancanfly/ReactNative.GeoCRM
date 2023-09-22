import React, {useMemo} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {Colors, Fonts, Values} from '../../../constants';
import SKUFeedbackTable from './components/SKUFeedbackTable';

const SKUCountCompletedView = props => {
  const {item} = props;
  if (!item) return null;
  const brand = item.brand;
  constructTableData = item => {
    const categories = item.categories;
    const completed_data = item.completed_data;
    const market_targets = item.market_targets;
    if (!completed_data) return [];
    return categories.map(category => {
      const brand = completed_data['category_value'][category] + '%';
      const market = market_targets[category] + '%';
      const fsi = completed_data['fsi_values'][category] + '%';
      const isHighlightFsi =
        Number(completed_data['fsi_values'][category]) >= 100;
      return {
        category,
        brand,
        market,
        fsi,
        isHighlightFsi,
      };
    });
  };
  const tableData = useMemo(() => constructTableData(item));
  return <SKUFeedbackTable tableData={tableData} brand={brand} />;
};

export default SKUCountCompletedView;
