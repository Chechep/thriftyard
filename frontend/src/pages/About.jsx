export default function About() {
    return (
      <div className="min-h-screen bg-blue-200 dark:bg-black text-black dark:text-white pt-24 px-6">
        <div className="max-w-4xl mx-auto">
          {/* Page Title */}
          <h1 className="text-3xl font-bold mb-8 text-center">
            Why Choose Virgil Thriftyard?
          </h1>
          <p className="text-lg text-center mb-12">
            More than just shopping – it's about making conscious choices that
            benefit you, your wallet, and the environment.
          </p>
  
          {/* Sections */}
          <div className="space-y-10">
            <div>
              <h2 className="text-2xl font-semibold mb-2">🌍 Eco-Friendly Shopping</h2>
              <p>
                Reduce fashion waste by giving pre-loved items a new life. Every
                purchase helps protect our planet.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">💸 Unbeatable Prices</h2>
              <p>
                Get designer and high-quality pieces at a fraction of retail cost.
                Style doesn't have to break the bank.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">✨ Unique Finds</h2>
              <p>
                Discover one-of-a-kind pieces that express your individual style.
                Stand out from the crowd.
              </p>
            </div>
  
            <div>
              <h2 className="text-2xl font-semibold mb-2">✅ Quality Guaranteed</h2>
              <p>
                Every item is carefully inspected and authenticated. Shop with
                confidence knowing you're getting the best.
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  