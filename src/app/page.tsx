import Header from "@/components/header";
import AirdropForm from "@/components/AirdropForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            欢迎使用 TSender
          </h1>
          <p className="text-xl text-gray-600">
            连接您的钱包开始使用
          </p>
        </div>
        
        <AirdropForm />

      </div>
    </main>
  );
}
