module NumberHelper
  DELIMITER_REGEX = /(\d)(?=(\d\d\d)+(?!\d))/

  def number_to_money(number, currency: "$", delimiter: ",", separator: ".")
    return if number.blank?
    "#{currency}#{number_to_delimited(number, delimiter: delimiter, separator: separator)}"
  end

  def number_to_delimited(number, delimiter: ",", separator: ".")
    return if number.blank?
    parts(raw_number(number), delimiter).join(separator)
  end

  def raw_number(number)
    number.to_s.tr "$, ", ""
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
