import mongoose from 'mongoose';

const Info = mongoose.model('Info');

/**
 * 保存用户信息
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
export const saveInfo = async (ctx, next) => {
  const opts = ctx.request.body;
  console.log(opts);
  const info = new Info(opts);
  const saveInfo = await info.save();
  
  console.log(saveInfo);
  
  if (saveInfo) {
    ctx.body = {
      success: true,
      info: saveInfo
    };
  } else {
    ctx.body = {
      success: false
    };
  }
};

/**
 * 获取所有用户信息
 * @param ctx
 * @param next
 * @returns {Promise<void>}
 */
export const fetchInfo = async (ctx, next) => {
  const infos = await Info.find({});
  
  if (infos.length) {
    ctx.body = {
      success: true,
      info: infos
    };
  } else {
    ctx.body = {
      success: false
    };
  }
};


