rest
====

对nodejs著名的async类库进行研究，并结合现有业务逻辑进行整合

asy001.js : 对每个子任务做并发、串行、限流操作。不关心结果。        | each<br />
asy002.js : 对每个子任务做并发、串行、限流操作。关心结果。          | map<br />
asy003.js : 对每个子任务做并发、串行、限流操作。关心并能控制结果。   | filter/reject<br />
asy004.js ：对每个子任务扔到队列中，进行限流处理。关心结果。        | push<br />
asy005.js : 尝试与传统WEBSEVICE进行结果。关心结果。                | http+mapseries<br />


app.js ：配合模拟A10<br />
app2.js ： 配合模式A10<br />