##### 查询会员签到记录
> GET v1/activities/{channel}/{platform}/{activityId}/users
> 请求头 token
> 返回值
>
> | 参数 |类型 | 描述 |
> |----|----|----|
> | continuousDays | int | 连签天数 |
> | point | int | 积分数（兰花豆）|
> | records |List\<SignInRecord\>|签到记录|
> SignInRecord
> | 参数 |类型 | 描述 |
> |----|----|----|
> | participated | boolean | 是否参加 |
> | date | Date(yyyy-MM-dd) | 日期 |
> | point | int | 积分|
>

##### 签到
> POST v1/activities/{channel}/{platform}/{activityId}
> 请求头 token
> 返回值 point 获得的积分

##### 查询积分明细
> GET v1/points/{channel}/{platform}/users
> 请求头 token
> 返回值
>
> | 参数 |类型 | 描述 |
> |----|----|----|
> | pointRecords | List\<VipCardPointRecord\> | 积分变更记录 |
> VipCardPointRecord
> | 参数 |类型 | 描述 |
> |----|----|----|
> | id | String | 记录id |
> | cause | String | 变动原因|
> | causeDesc | String | 原因详情 |
> | currentPoint | int | 当前分数|
> | changedPoint | int | 变动分数 |
> | resultPoint | int | 结果分数 |
> | actionTime | DateTime(yyyy-MM-dd HH:mm:ss) | 变动时间 |

##### url参数描述
> | 参数 |类型 | 描述 |
> |----|----|----|
> | channel | String | 渠道，XIAO_LAN |
> | platform | String |平台，WECHAT_MINI_PROGRAM |
> | activityId | int | 活动id，0：签到活动|
