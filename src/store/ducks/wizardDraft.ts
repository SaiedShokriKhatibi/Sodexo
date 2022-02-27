import { LocationData } from 'src/components/AddressWithLocation/index.tsx';
import { QuestionsDraft } from 'src/routes/Wizard/ServiceQuestions';
import { MAP_CORDINATION } from 'src/configs/defaultValues';

// Actions
export const UPDATE_WIZARD = 'WIZARD/UPDATE';
export const UPDATE_WIZARD_QUESTIONS = 'WIZARD/UPDATE/QUESTIONS';
export const RESET_WIZARD = 'WIZARD/RESET';

export interface IWizardDraft {
  service?: string;
  orderNumber?: string;
  questionsDraft?: QuestionsDraft;
  date?: string;
  location?: LocationData;
  description?: string;
}

interface IAction<T> {
  payload?: T;
  type: string;
}

// Reducer
export const initialLocation: LocationData = { coordinates: MAP_CORDINATION, address: '', zone_slug: '', slug: '' };
const initialQuestionsDraft: QuestionsDraft = {
  currentStep: 0,
  questionsAnswer: [],
  questionsList: [],
  completed: false,
};
export const initialWizardDraft: IWizardDraft = {
  service: '',
  date: '',
  description: '',
  questionsDraft: initialQuestionsDraft,
  location: initialLocation,
};
export default (
  state: IWizardDraft = initialWizardDraft,
  action: IAction<IWizardDraft & QuestionsDraft>
): IWizardDraft => {
  switch (action.type) {
    case UPDATE_WIZARD:
      return { ...state, ...action.payload };
    case UPDATE_WIZARD_QUESTIONS:
      return { ...state, questionsDraft: { ...state.questionsDraft, ...action.payload } };
    case RESET_WIZARD:
      return initialWizardDraft;
    default:
      return state;
  }
};

// Action Creators
export const updateWizardDraft = (payload: IWizardDraft) => {
  return {
    type: UPDATE_WIZARD,
    payload,
  };
};
export const updateWizardQuestions = (payload: QuestionsDraft) => {
  return {
    type: UPDATE_WIZARD_QUESTIONS,
    payload,
  };
};
export const resetWizardDraft = () => {
  return {
    type: RESET_WIZARD,
  };
};
