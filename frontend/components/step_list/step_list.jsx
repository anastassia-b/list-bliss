import React from 'react';
import StepListItemContainer from './step_list_item_container';

const StepList = ({ steps, todo_id, createStep }) => {
  const stepItems = steps.map(step => (
    <StepListItemContainer
      key={step.id}
      step={step} />
  ));

  return (
    <div>
      <ul className="step-list">
        { stepItems }
      </ul>
    </div>
  );
};

export default StepList;
