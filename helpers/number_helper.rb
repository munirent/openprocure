module NumberHelper
  DELIMITER_REGEX = /(\d)(?=(\d\d\d)+(?!\d))/

  def number_to_delimited(number, delimiter: ",", separator: ".")
    parts(number, delimiter).join(separator)
  end

  private

  def parts(number, delimiter)
    left, right = number.to_s.split('.')
    left.gsub!(DELIMITER_REGEX) do |digit_to_delimit|
      "#{digit_to_delimit}#{delimiter}"
    end
    [left, right].compact
  end
end
