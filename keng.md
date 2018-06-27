1、初始化运行红屏错误 unable to load script from asset/index.android.bundle

   原因：assets中的这个index.android.bundle毫无疑问就是用来调用原生控件的js脚本，每次当你改变了 index.android.js，你都需要使用上面的代码片段，来及时的更新index.android.bundle，然后打包才可以把新的index.android.js应用上，所以当没有index.android.bundle文件时，RN是无法运行的

   解决方法：react-native bundle --platform android --dev false --entry-file i 
ndex.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/  
app/src/main/res/

2,修改app名称：res-->strings.xml

3、修改app图标：首先把要修改成的图片放到mipmap的不同分辨率文件夹，然后在AndroidManifest.xml中修改    
android:icon="@mipmap/jinghui"

4、适配全面屏：
        1):把android文件夹下的build.gradle修改成    compileSdkVersion 24; buildToolsVersion "24.0.1"，以为只有sdk24以上才支持全面屏适配
        2):在mainfest的activity中加上--> android:resizeableActivity="true" ，



5、react-native-router-flux使用：
        hideNavBar：除非您添加hideNavBar，否则将会出现两个导航条。

