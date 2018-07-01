###########################
#######--运行问题--#########
###########################

1、初始化运行红屏错误 unable to load script from asset/index.android.bundle

   原因：assets中的这个index.android.bundle毫无疑问就是用来调用原生控件的js脚本，每次当你改变了 index.android.js，你都需要使用上面的代码片段，来及时的更新index.android.bundle，然后打包才可以把新的index.android.js应用上，所以当没有index.android.bundle文件时，RN是无法运行的

   解决方法：react-native bundle --platform android --dev false --entry-file i 
ndex.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/  
app/src/main/res/

#########################
2,修改app名称：res-->strings.xml

#########################
3、修改app图标：首先把要修改成的图片放到mipmap的不同分辨率文件夹，然后在AndroidManifest.xml中修改    
android:icon="@mipmap/jinghui"


#########################
4、适配全面屏：
        1):把android文件夹下的build.gradle修改成    compileSdkVersion 24; buildToolsVersion "24.0.1"，以为只有sdk24以上才支持全面屏适配
        2):在mainfest的activity中加上--> android:resizeableActivity="true" ，



###########################
#######--组件使用--#########
###########################

1、react-native-router-flux使用：
        hideNavBar：  除非您添加hideNavBar，否则将会出现两个导航条。
              tabs:  定义TabBar场景容器以便子场景可以作为tabs展示。如果没有组件被定义，内置的TabBar 将作为容器。所有的         子场景都被包裹到自己的导航条中。
        导航栏回底部： 加属性tabBarPosition="bottom"
    activeTintColor:  选中颜色
          showLabel:  是否显示标签栏文字。
   animationEnabled： 是否显示切换动画


2、react-native-vector-icons ：安装完之后 运行命令：react-native link react-native-vector-icons,就可以愉快的去官网                                                                 https://oblador.github.io/react-native-vector-icons/  选用喜欢的图标了


3、TouchableOpacity： 本组件用于封装视图，使其可以正确响应触摸操作
                      activeOpacity ：操作透明度（0-1）
                                    

4、FlatList:列表组件，

##########################
#####--style样式问题--####
##########################
1、：
      1)、ellipsizeMode：
                  ellipsizeMode的取值为enum(‘head’, ‘middle’, ‘tail’, ‘clip’) ,用来设定当文本显示不下全部内容时，文本应该如何被截断，需要注意的是，它必须和numberOfLines（文本显示的行数）搭配使用，才会发挥作用。
                  head：从文本的开头进行截断，并在文本的开头添加省略号，例如：…xyz。
                  middle ：从文本的中间进行截断，并在文本的中间添加省略号，例如：ab…yz。
                  tail：从文本的末尾进行截断，并在文本的末尾添加省略号，例如：abcd…。
                  clip ：文本的末尾显示不下的内容会被截断，并且不添加省略号，clip只适用于iOS平台。
