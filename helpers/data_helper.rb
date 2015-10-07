module DataHelper
  def unique_keys(array_of_hash)
    array_of_hash.map(&:keys).flatten.uniq
  end

  def extract_values(hash, keys)
    keys.each_with_object([]) { |key, result| result.push(hash[key]) }
  end
end
