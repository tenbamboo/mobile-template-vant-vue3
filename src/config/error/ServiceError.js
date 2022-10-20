// import { isEmpty } from 'lodash';
import { Notify } from 'vant';

export default class ServiceError extends Error {
  // Convenient for back-end Troubleshooting: unique request ID
  // detail: Object;
  constructor(
    errorCode,
    errorMessage,
    reason,
    params,
  ) {
    Notify({ type: 'danger', message: `[${errorCode}] ${errorMessage}` });

    // const msg = errorMessage;
    // 系统自定义消息
    // if (errorCode
    //     && typeof errorCode === 'string'
    //     && isEmpty(errorMessage)
    //     && errorCode.indexOf('SYSMSG') === 0) {
    //   msg = new Message(errorCode, params).getMessage();
    //   if (isEmpty(msg)) {
    //     errorCode = '';
    //     msg = new Message('SYSMSG-SERVICE-UNKNOWN-ERROR').getMessage();
    //   }
    // }
    super(`ServiceError-${errorCode}-${errorMessage}-${reason}-${params}`);
  //   this.detail = reason;
  //   this.traceId = traceId;
  //   this.oddNumber = oddNumber;
  //   // 在Firefox下只要不是已经明确设置不显示异常，否则抛出'unhandledrejection'事件
  //   if (isFirefox() && pathOr(true, ['config', 'isShowError'], reason) !== false) {
  //     dispatchUnHandlerRejectEvent(this);
  //   }
  }
}
