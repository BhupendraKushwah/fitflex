import toasty from '@/utils/toasty.util';

/**
 * Handles API success responses and displays appropriate toast notifications.
 * @param {Object} response - The success response object from an API call.
 * @param {Object} options - Configuration for notifications.
 * @param {boolean} options.notifyOnSuccess - Whether to notify on successful responses.
 * @param {boolean} options.notifyOnFailed - Whether to notify on failed responses.
 * @returns {Object} - A structured result containing success flag, data, and statusCode.
 */
const successHandler = (response, { notifyOnSuccess = false, notifyOnFailed = false } = {}) => {
  const { data } = response ?? {};
  const successMessage = data?.message ?? null;

  if (successMessage) {
    if (data?.result === false) {
      // Notify with a warning for partial or non-critical failures.
      toasty.warning(successMessage);
    } else if (notifyOnFailed && data?.status === false) {
      // Notify with an error if the operation failed.
      toasty.error(successMessage);
    } else if (notifyOnSuccess && data?.status !== false) {
      // Notify with success if the operation succeeded.
      toasty.success(successMessage);
    }
  }

  return {
    success: true,
    data: data,
    statusCode: response?.status
  };
};

export default successHandler;
