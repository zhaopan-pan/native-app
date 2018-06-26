1、初始化运行红屏错误 unable to load script from asset/index.android.bundle

   原因：assets中的这个index.android.bundle毫无疑问就是用来调用原生控件的js脚本，每次当你改变了 index.android.js，你都需要使用上面的代码片段，来及时的更新index.android.bundle，然后打包才可以把新的index.android.js应用上，所以当没有index.android.bundle文件时，RN是无法运行的

   解决方法：react-native bundle --platform android --dev false --entry-file i 
ndex.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/
app/src/main/res/
