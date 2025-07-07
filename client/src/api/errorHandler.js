import toasty from '@/utils/toasty.util';

import message from '@/constants/message.constant';
import { clearAllSession } from '@/utils/authentication.util';

/**
 * Handles API error responses and displays appropriate toast messages.
 * @param {Object} error - The error object from an API call.
 * @returns {Object} - The structured error response with success flag, data, and statusCode.
 */
const errorHandler = (error) => {
  const statusCode = error?.response?.status ?? 0;
  const errorMessage = error?.response?.data?.message ?? null;

  if (errorMessage) {
    if (statusCode >= 500) {
      toasty.error(errorMessage);
    } else {
      if(statusCode!=401){
        toasty.error(errorMessage);
      }

      
    }
  } else if (statusCode >= 500) {
    toasty.error(message.ERROR_AFTER_HOUR);
  }else  if (statusCode == 401 && error.response.data.status === 'TERMINATE'){

    clearAllSession(true)
  }

  // Optional: Log error for debugging purposes
  if (import.meta.env.APP_ENV !== 'production') {
    console.error("Error handler:", {
      statusCode,
      errorMessage,
      responseData: error?.response?.data,
    });
  }

  return {
    success: false,
    data: error?.response?.data,
    statusCode,
  };
};

export default errorHandler;
