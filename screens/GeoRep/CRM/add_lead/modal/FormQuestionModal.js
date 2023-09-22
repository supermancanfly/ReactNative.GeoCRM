import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import CModal from '../../../../../components/common/CModal';
import {Constants} from '../../../../../constants';
import FormQuestionContainer from '../containers/FormQuestionContainer';

const FormQuestionModal = React.forwardRef((props, ref) => {
  const onButtonAction = data => {
    if (props.onButtonAction) {
      props.onButtonAction(data);
    }
    if (data.type == Constants.actionType.ACTION_DONE) {
      if (ref) {
        ref.current.hideModal();
      }
    }
    if (data.type == Constants.actionType.ACTION_CLOSE) {
      if (ref) {
        props.onButtonAction(data);
      }
    }
  };

  return (
    <CModal
      ref={ref}
      modalType={Constants.modalType.MODAL_TYPE_FULL}
      {...props}>
      <SafeAreaView style={{flex: 1}}>
        <FormQuestionContainer
          {...props}
          style={{marginTop: 14}}
          onButtonAction={onButtonAction}
        />
      </SafeAreaView>
    </CModal>
  );
});

export default FormQuestionModal;
