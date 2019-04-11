#for debug node
node --inspect-brk index.js

Open about:inspect in Chrome

debug in terminal node debug 01-hello-workout.js

commonJS import modules

- Relative path: require('./hello')
- Absolute path: require('/home/world/helo)
- name: require('hello')

event loop

- Call Stack
  Last-In First-Out data structure
  Helpful for debugging
  Programs crash on stack overflow
  Composed of stack frames
  Stack frame: arguments, return address, and local variables
  Avoid too many function calls

eventEmitter

- generic wrapper
- execute functions on events
  functions => listeners

Streams

- Abstract interface
- Alternative way to access data
- Lower memory requirement
- Instances of eventEmitter
- Readble/Writable/Duplex

readable streams

- For receiving data
- Waits until you are ready to receive
- Flowing or paused mode
- Flowing mode: receive as fast as possible
- Pause mode: Read manually

flowing mode

- Add data event handler
- Call resume() or pipe() method

paused mode

- Call pause() method
- Remove all data event handlers and pipe destinations

writable streams
custom streams

Stream là gì ?
Stream là các đối tượng cho phép bạn đọc dữ liệu từ một nguồn và ghi dự liệu đến một đích. Trong Node.js, có 4 loại Stream.

Readable - Là Stream được sử dụng để cho hoạt động đọc

Writable - Là Stream được sử dụng cho hoạt động ghi

Duplex - Là Stream được sử dụng cho cả mục đích ghi và đọc

Transform - Đây là một kiểu Duplex Stream, khác ở chỗ là kết quả đầu ra được tính toán dựa trên dữ liệu bạn đã nhập vào.

Mỗi loại Stream là một sự thể hiện của đối tượng EventEmitter và ném một vài sự kiện tại các thời điểm khác nhau. Danh sách sau liệt kê một số sự kiện thường được sử dụng:

data - Sự kiện này được kích hoạt khi dữ liệu là có sẵn cho hoạt động đọc.

end - Sự kiện này được kích hoạt khi không còn dữ liệu nào để đọc nữa.

error - Sự kiện này được kích hoạt khi xảy ra bất kỳ lỗi nào trong việc đọc và ghi dữ liệu.

finish - Sự kiện này được kích hoạt khi tất cả dữ liệu đã được chuyển hết tới vùng hệ thống cơ sở.

Phần tiếp theo mình sẽ trình bày chi tiết các hoạt động thường sử dụng trên các Stream.

--

mocha is javascript testing framework for nodejs and browser

chai is BDD/TDD assertion library for nodejs and browser

several interfaces

BDD is software development process

BDD's focus is on behavior and business value

Behavior-driven development style

Test-driven development Style

mocha file --bail this will stop the test when one test case is failed

spy and stub
spy
records actions
check interaction
was method called
anonymous function or existing function
data about all calls

sinonjs allow to use sinon.spy(), sinon.spy(myFunction), sinon.spy(object, 'method')

stub is next simplest test double
no expectations about behavior
behaves in a specific way
anonymous function or existing function
original function not called
test a specific path
prevent calling method directly
sinon.stub(), sinon.stub(object, "method"), sinon.stub(object, "method", func), sinon.stub(object)

spy la copy mo ta action cua 1 method
con stub la mock dau vao dau ra cua method du cho method co la gi
