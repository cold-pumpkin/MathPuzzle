@memo = {}

def game(coin, depth)
  return @memo[[coin, depth]] if @memo.has_key?([coin, depth])
  return 1 if depth == 0
  return 0 if coin == 0
  win = game(coin + 1, depth - 1)  # 이겼을 때
  lose = game(coin - 1, depth - 1) # 졌을 때
  @memo[[coin, depth]] = win + lose
end

puts game(10, 24)
