功能分析
----

在游戏相关的threejs项目中,经常需要用到游戏的人物控制模块。 而尽管游戏不同，但关于人物控制的模块其实是相一致的。 它包括以下几个小模块：

*   人物的移动转向逻辑
*   镜头相机的跟随逻辑
*   物理效果，如碰撞重力等
*   人物交互效果（如跳跃动、拾取、攻击动画等）
*   手机端适配，摇感控制

搭建框架
----

*   技术选型
    
    *   前端框架选择react， 使用[vite](https://link.juejin.cn?target=https%3A%2F%2Fvitejs.cn%2F "https://vitejs.cn/")来编译打包
        
    *   为了快速开发，使用threejs的框架[@react-three-fiber](https://link.juejin.cn?target=https%3A%2F%2Fdocs.pmnd.rs%2Freact-three-fiber%2Fgetting-started%2Fintroduction "https://docs.pmnd.rs/react-three-fiber/getting-started/introduction")
        
    *   与react-three/fiber配套的工具包: [@react-three/drei](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpmndrs%2Fdrei "https://github.com/pmndrs/drei")
        
    *   为快速实现物理效果及碰撞检测使用 [@react-three/rapier](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpmndrs%2Freact-three-rapier "https://github.com/pmndrs/react-three-rapier")
        
*   初始化项目
    
    vite官网查看文档，考虑代码的编译添加swc，为了类型安全和补全提示使用ts ![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d6b7eb0264e4eabb28c16d5bee6a70c~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=690&h=118&s=13065&e=png&b=fffefe)
    
*   vite获取项目模板
    

shell

 代码解读

复制代码

`npm create vite@latest playerCtr -- --template react-swc-ts`

*   添加react-three依赖

shell

 代码解读

复制代码

  `npm install three @types/three @react-three/fiber` 

*   添加react-three的工具包

shell

 代码解读

复制代码

  `npm install @react-three/drei` 

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/f2592a98c84945f8bc631057c0961614~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=1233&h=824&s=104808&e=png&b=1d1d1d)

*   添加物理效果的依赖

shell

 代码解读

复制代码

  `npm install @react-three/rapier`

*   添加骨骼动画的依赖

shell

 代码解读

复制代码

  `npm install three-stdlib`

构建项目
----

### 项目结构

我们将ui和模型进行分离，让模型层处于ui视图的下方,ui视图浮在模型上。

*   在src下新建文件夹models, 我们将所有的3d模型相关逻辑放在这里，以便和其他一般的纯tsx页面区分
*   src下新建pages文件夹，放置非模型的ui视图，如hub、加载页、弹窗页等。并让pages所代表的ui视图整体浮在models上。

### 初始化canvas

models下新建index.tsx文件

*   使用Canvas组件作为根节点展示所有的3d内容

tsx

 代码解读

复制代码

`import { Canvas } from '@react-three/fiber' function Models() {  return <Canvas style={{ width: '100%', height: '100%' }}>  </Canvas>  }  export default Models`

*   从react-three/rapier 中导出Physics，Physics的子节点将会产生物理效果

tsx

 代码解读

复制代码

`import { Canvas } from '@react-three/fiber' import { Physics } from '@react-three/rapier' function Models() {   return <Canvas style={{ width: '100%', height: '100%' }}>         <Physics>         </Physics>     </Canvas> } export default Models`

*   添加行星控制器、添加辅助线、设置基本光照（环境光、直线光、反射光）添加天空盒

tsx

 代码解读

复制代码

`import { Canvas } from '@react-three/fiber' import { Physics } from '@react-three/rapier' import { Environment, OrbitControls, Sky } from '@react-three/drei' function Models() {   return <Canvas style={{ width: '100%', height: '100%' }}>         <Physics>         </Physics>       <OrbitControls {...controlConfig} makeDefault />       <Sky sunPosition={[100, 20, 100]} distance={1000} />       <Environment preset="city" /> // 环境光的反射              <ambientLight intensity={1} />       <directionalLight         position={[100, 100, 100]}         intensity={1.5}       />        <axesHelper args={[500]} />     </Canvas> } export default Models`

最后在app.tsx中引入Models

tsx

 代码解读

复制代码

`import Models from './models' function App() {   return (       <Models />   ) } export default App`

现在应该可以在页面上看到蓝色的天空和辅助线

![image.png](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/549ef4f7840a4676b2f0fc347f3ba863~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=914&h=857&s=213817&e=png&b=b1b5b2)

加载模型
----

*   加载环境模型  
    [去下载](https://link.juejin.cn?target=https%3A%2F%2Fgitee.com%2Fbrother_shui%2Fplayer-control%2Ftree%2Fmaster%2Fpublic%2Fworld.glb "https://gitee.com/brother_shui/player-control/tree/master/public/world.glb")  
    models下新建ground.tsx文件 使用 [@react-three/drei](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpmndrs%2Fdrei%3Ftab%3Dreadme-ov-file%23usegltf "https://github.com/pmndrs/drei?tab=readme-ov-file#usegltf") 导出的 useGLTF加载模型，这里的加载路径是public目录中的

使用RigidBody 刚体组件将模型包裹，这样才会被外部的Physics识别为刚体。因为环境是固定不动，刚体类型为fixed，碰撞类型为trimesh，即该模型的本身为可碰撞（可选有box、sphere、cylinder）注意仅限于简单模型，否则应该使用box。

tsx

 代码解读

复制代码

`import { useGLTF } from "@react-three/drei"; import { RigidBody } from "@react-three/rapier"; useGLTF.preload("./world.glb"); // 预加载 function Ground({ log = true }) {   // 加载模型   const ground = useGLTF("./world.glb"); // 地面   return (     <group dispose={null}>       <RigidBody         name="环境"         type="fixed"         colliders="trimesh"         position={[0, 0, 0]}       >         <primitive object={ground.scene} />       </RigidBody>     </group>   ); } export default Ground`

*   加载人物模型  
    [去下载](https://link.juejin.cn?target=https%3A%2F%2Fgitee.com%2Fbrother_shui%2Fplayer-control%2Ftree%2Fmaster%2Fpublic%2Fplayer%2Factor.gltf "https://gitee.com/brother_shui/player-control/tree/master/public/player/actor.gltf")  
    加载过程同理，刚体类型为动态，刚体的碰撞与旋转都关闭。这2者我们手动控制。人物的碰撞模型，使用胶囊碰撞组件CapsuleCollider替代（人物的建模线面太多，生成碰撞体有性能问题）。你可以在Physic上将debug属性设为true，查看碰撞线面的多寡。

tsx

 代码解读

复制代码

`import { useGLTF } from "@react-three/drei"; import { CapsuleCollider, RigidBody } from "@react-three/rapier"; function Player() {   // 加载模型   const { scene } = useGLTF("./player/actor.gltf");   return <group dispose={null}>     <RigidBody       colliders={false}       type="dynamic"       enabledRotations={[false, false, false]}     >       <primitive object={scene} position={[0, -1, 0]} />       <CapsuleCollider args={[0.6, 0.3]} position={[0, -0.1, 0]} />     </RigidBody>   </group> } export default Player;`

将上面的2个模型组件加载到Physics中,并将debug打开，查看碰撞体

tsx

 代码解读

复制代码

`... <Physics debug={ture}>     <Player />     <Ground /> </Physics> ...`

如果前面都正确无误的话这个时候应该能看到环境和人物了如下图

![image.png](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/0d01603f8cc94fa8ab1766ed6cb8a8c6~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=914&h=857&s=622626&e=png&b=879db1)

人物控制
----

### 键盘映射

从工具包中导入KeyboardControls 来定义用户的键盘输入, 定义键盘映射（一般在游戏中这个是可配置的，这里简单写死）上、下、左、右、跳5个动作。

tsx

 代码解读

复制代码

`import {  KeyboardControls } from '@react-three/drei'   // 键盘事件   const actions = [     { name: "forward", keys: ["ArrowUp", "w", "W"] },     { name: "backward", keys: ["ArrowDown", "s", "S"] },     { name: "left", keys: ["ArrowLeft", "a", "A"] },     { name: "right", keys: ["ArrowRight", "d", "D"] },     { name: "jump", keys: ["Space"] },   ];      <Canvas style={{ width: '100%', height: '100%' }}>         <KeyboardControls map={actions}>             ...         </KeyboardControls>     </Canvas>`

### 人物移动

进入player.tsx,获取玩家的引用, 检测用户的键盘输入，改变玩家的速度

tsx

 代码解读

复制代码

`import { useKeyboardControls } from "@react-three/drei"; import { RapierRigidBody} from "@react-three/rapier";    ...  const player = useRef<RapierRigidBody>(null); // 玩家的引用  useKeyboardControls((state) => move(state)) // 监听自定义键盘事件    function move(){...}       <RigidBody       ref={player}       ...       >       ...`

移动函数主要移动逻辑，toFixed是为了处理浮点数，保留三位小数

ts

 代码解读

复制代码

`const SPEED = 4; // 移动速度 const JUMP = 7; // 跳跃速度 const velocity = new THREE.Vector3(); // 方向 // 移动逻辑 function move(state: {     [key: string]: boolean;   }): boolean {     if (!camera || !player.current) return false     const { forward, backward, left, right, jump } = state     // 获取移动方向     velocity.set(Number(right) - Number(left), 0, Number(backward) - Number(forward))       .normalize()       .multiplyScalar(SPEED)       .applyEuler(camera.rotation); // 以相机方向为基准,应用欧拉角，保证前后左右的位置始终相对于你的镜头方向     const target = {       x: toFixed(velocity.x),       y: player.current.linvel().y, // 镜头方向的y方向需要舍弃掉，人物在垂直方向不会获得速度，只会继承自己的原速度       z: toFixed(velocity.z),     };     player.current.setLinvel(target, true);     // 跳跃     if (jump) {       player.current.setLinvel({ x: 0, y: JUMP, z: 0 }, true);     }     return true   }  // 处理浮点数 function toFixed(num: number, digit = 3) {   const scale = 10 ** digit;   return Math.floor(num * scale) / scale; }`

现在你的人物可以平移了，但是没有动画，镜头也没有跟随移动。

![ezgif-3-6da091ea5f.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/158cf1afd611489ab4c06c8c39e076be~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=600&h=528&s=1838094&e=gif&f=66&b=8fa6ba)

移动动画
----

从drei导入useAnimations 再将动画与模型双向绑定。获得actions和names分别是动画数组和动画索引的数组（通常是动画的名字）

tsx

 代码解读

复制代码

`import { useAnimations, useGLTF } from "@react-three/drei"; const { scene, animations } = useGLTF("./player/actor.gltf"); const { ref, actions, names } = useAnimations(animations, scene);    <RigidBody >   <primitive ref={ref} ... />   </RigidBody>`

在move函数中判断动画的播放情况

ts

 代码解读

复制代码

`// 生成枚举值，对应names中的动画索引 enum STATUS {   walk,   idle,   run }  const [status, setStatus] = useState(names[STATUS.idle])      useEffect(() => {     if (!names || !actions) return     // 退出上次的动画     names?.forEach(name => {       actions[name]?.fadeOut(0.2).stop();     });     // 切换当前动画，从头播放，0.2s切换动画     actions[status]?.reset().fadeIn(0.2).play()   }, [actions, names, status])       funciton move(){     ...        // 当速度不为0或跳跃时播放 run动画       let key = names[STATUS.idle]       if (velocity.x !== 0 || velocity.z !== 0 || jump) {         key = names[STATUS.run]       }       if (status != key) setStatus(key) }`

要注意生命周期的顺序执行，如果一切顺利应该可以在移动时触发动画了，但是人物还不会转弯，十分生硬。

![ezgif-3-80d47522a6.gif](https://p6-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/4f341b5023184c12babcb101ba2dd877~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=600&h=528&s=2127782&e=gif&f=96&b=849bae)

人物旋转
----

需要从rapier中导出一些角度的数学转换工具, 我们根据当前的速度方向计算人物的旋转角度。再转成欧拉角，最后转成四元数。使用lerp插值变化四元数赋值给玩家。

tsx

 代码解读

复制代码

`import { euler,quat} from "@react-three/rapier";   // 帧渲染   useFrame((state: RootState, delta) => {     if (!player.current) return;     // 人物移动时进行旋转     if (direction.x !== 0 || direction.z !== 0) {       rotation();     }   })   // 人物旋转   function rotation() {     const rotationAngle = Math.atan2(velocity.x, velocity.z); // 旋转角度     const rotationEuler = euler().set(0, rotationAngle, 0); // 旋转欧拉角     const rotationQuaternion = quat().setFromEuler(rotationEuler); // 目标旋转四元数     const startQuaternion = quat().copy(player.current.rotation()); // 当前旋转四元数     startQuaternion.slerp(rotationQuaternion, 0.2); // 0.2s的过渡时间     player.current.setRotation(startQuaternion); // 应用此四元数   }`

如果到现在正常的话人物可以正常转向了，但是人物会移动到视野之外。

![ezgif-3-ad4cb842ac.gif](https://p9-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/b84709eef0644abca9b685798795591e~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=600&h=528&s=4518540&e=gif&f=62&b=92a8bd)

镜头追随
----

我们要让摄像机的位置始终处在以玩家为中心的位置。我们建立以玩家为中心的球形坐标系。在球形坐标系中，要确定一个点的位置则需要3个参数：半径，及点与垂直和水平面的个夹角。  
获得球形坐标后,后再把球形坐标转换回世界坐标系，在此基础上向量加和玩家自身的位置，就得到了相机更新后的世界坐标。

tsx

 代码解读

复制代码

`...   // 帧渲染   useFrame((state: RootState, delta) => {     if (!player.current) return;     // 玩家距离相机的位置     const distance = toFixed((state.controls as CustomEventDispatcher).getDistance());     // 更新相机位置     updateCamera(state, distance, delta);       ...   })        function updateCamera(state: RootState, distance: number, delta: number) {     if (!player.current) return     const playerPos = player.current.translation(); // 玩家世界坐标     const rotateDelta = (direction.x / 100) * delta;     const { camera, controls } = state;     controls.target.copy(playerPos);     const spherical = new THREE.Spherical(       distance,       controls.getPolarAngle(),       controls.getAzimuthalAngle() - rotateDelta     );     const position = new THREE.Vector3().setFromSpherical(spherical);     camera.position.copy(playerPos).add(position);   } ...`

如果顺利的话，这时应该已实现了镜头追随。 ![ezgif-3-2934125297.gif](https://p3-juejin.byteimg.com/tos-cn-i-k3u1fbpfcp/41411e78eead403386a773f43f1ad1a1~tplv-k3u1fbpfcp-jj-mark:3024:0:0:0:q75.awebp#?w=600&h=528&s=4220578&e=gif&f=51&b=92a8bd)

结语
--

我把代码放在了gitee上，有不明白的可以自行git clone： [地址](https://link.juejin.cn?target=https%3A%2F%2Fgitee.com%2Fbrother_shui%2Fplayer-control "https://gitee.com/brother_shui/player-control")

这一路写下来，其实你也发现了，这种3d模型的项目对于各种数学公式的使用十分频繁。对空间向量，坐标转换，四元数组等数学知识有一定的要求，如果接着往后面写的话，如自动寻路等会涉及到各种算法。  
这段代码有很多性能可以优化的地方，但是基本实现思路都是一样的。  
前段时间我发现 react-three-fiber的作者[pmndrs](https://link.juejin.cn?target=https%3A%2F%2Fgithub.com%2Fpmndrs "https://github.com/pmndrs")开源了一个新的react-three库，专门用来做角色控制的。  
下次有空的时候，我将在进阶篇，使用这个库来重新实现玩家控制逻辑。  
我已经大致阅读过他的源码,代码很优雅，性能十分出色。我相信随着迭代，将来我们不再需要这样一步步自己实现相关的功能。  

那么下次再会了，游戏世界的造物主们！

本文转自 <https://juejin.cn/post/7351642274273918986?searchId=20240729142709158C8C942214891452B1>，如有侵权，请联系删除。