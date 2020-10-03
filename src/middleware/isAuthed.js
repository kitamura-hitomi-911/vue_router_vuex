// ログイン状況をサーバに問い合わせする処理の仮
// これだけ認証トークン不要みたいなつくりにする必要がありそう？

export default function(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(true);
      reject(false);
    }, 100);
  });
}