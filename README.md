rest
====

对nodejs著名的async类库进行研究，并结合现有业务逻辑进行整合

asy001.js : 对每个子任务做并发、串行、限流操作。不关心结果。        | each<br />
asy002.js : 对每个子任务做并发、串行、限流操作。关心结果。          | map<br />
asy003.js : 对每个子任务做并发、串行、限流操作。关心并能控制结果。   | filter/reject<br />