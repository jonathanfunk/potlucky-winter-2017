import { loadingResource, doneLoading } from './isLoadingActions';
import potluckApi from '../../services/api/pot-lucks';
import potluckActions from '../../services/api/pot-lucks';
import potluckGuests from '../../services/api/guest-invites';

export const loadCurrentPotluck = potluck => ({
  type: 'LOAD_CURRENT_POTLUCK',
  payload: potluck
});

export const fetchCurrentPotluck = potluckId => (dispatch) => {
  dispatch(loadingResource());
  potluckApi.getPotluck(potluckId)
    .then((potluck) => {
      potluck.id = potluckId;
      dispatch(loadCurrentPotluck(potluck));
      dispatch(doneLoading());
    })
    .catch(error => console.log(`Error fetching JSON: ${error}`));
};

export const fetchCurrentPotluckGuestlist = (potluckId) => {
  return (dispatch) => {
    dispatch(loadingResource());
    potluckGuests.getPotluckInviteResponse(potluckId)
      .then((result) => {
        // dispatch(loadCurrentPotluckGuests(result));
        console.log(result);
        dispatch(doneLoading());
      })
      .catch(error => console.log(error));
  };
};
