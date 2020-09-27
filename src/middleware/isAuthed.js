// ログイン状況をサーバに問い合わせする処理の仮

export default function(){
  return new Promise( (resolve, reject) => {
    setTimeout(() => {
      resolve(true);
      reject(false);
    }, 100);
  });
}