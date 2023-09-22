import React from 'react';
import {Constants} from '../../../../constants';
import CModal from '../../../common/CModal';
import {getQuestionTitle} from '../helper';
import SKUCountForm from '../SKUCountForm';

const SKUCountFormModal = React.forwardRef((props, ref) => {
  const {questionType} = props;
  const onButtonAction = data => {
    if (props.onButtonAction) {
      props.onButtonAction(data);
    }
    if (ref) {
      ref.current.hideModal();
    }
  };
  const {item} = props;
  const title = item.question_text;
  return (
    <CModal
      ref={ref}
      title={title}
      closableWithOutsideTouch
      modalType={Constants.modalType.MODAL_TYPE_BOTTOM}
      onClear={() => {
        onButtonAction({
          type: Constants.actionType.ACTION_FORM_CLEAR,
        });
      }}
      {...props}>
      <SKUCountForm
        {...props}
        questionType={questionType}
        style={{marginTop: 14}}
        onButtonAction={onButtonAction}
      />
    </CModal>
  );
});
export default SKUCountFormModal;
