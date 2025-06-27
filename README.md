1. create a basic react/nextjs application ✅
2. connect our wallet, with a nicer connect application 
3. Implement this function

```javascript
function airdropERC20(
    address tokenAddress, // ERC20 token
    address[] calldata recipients,
    uint256[] calldata amounts,
    uint256 totalAmount
)
```

wallet liberary:

rainbowKit  `pnpm add @rainbow-me/rainbowkit@latest wagmi viem@2.x @tanstack/react-query`

使用邮箱注册，然后登录，创建一个项目

create .env.local

create rainbowKitConfig.tsx 告诉我们标题，还有可以连接到哪些链

create providers.tsx 会包裹我们的整个组件，让我们整个项目都能访问到这些信息

其实以上步骤跟rainbowkit文档 -》安装 中一样

在这一步测试一下是否能运行了

添加 connectbutton，并改到layout

