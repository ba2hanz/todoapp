# Todo App [Geliştirme Aşamasında]

Bu proje, basit ama işlevsel bir **Todo List** uygulamasıdır. Kullanıcılar yapılacak görevler ekleyebilir, tamamlananları işaretleyebilir, silebilir ve görevlerin durumlarına göre filtreleyebilir.

## ✨ Özellikler

- **Görev Ekleme**: Yeni görev başlığı ve açıklaması girilerek görev oluşturulabilir.
- **Görev Tamamlama**: Görevler tamamlandığında işaretlenebilir.
- **Tamamlanma Zamanı**: Her tamamlanan görev, hangi tarihte ve saatte tamamlandığıyla birlikte kaydedilir.
- **Görev Silme**: Hem yapılacaklar listesi hem de tamamlananlar listesinden görev silinebilir.
- **Görev Görünümü**: Yapılacaklar (ToDo) ve tamamlananlar (Completed) ayrı sekmelerde gösterilir.
- **Otomatik Temizleme**: Görev eklendikten sonra giriş alanları (Title & Description) otomatik olarak temizlenir.
- **Veri Saklama**: Uygulama, kullanıcı görev verilerini tarayıcının localStorage'ında saklar.

## 🚀 Kurulum

Bu projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları takip edin:

### 1. Depoyu Klonlayın

```bash
git clone https://github.com/ba2hanz/todoapp.git
```

### 2. Proje Klasörüne Geçin

```bash
cd todoapp
```

### 3. Bağımlılıkları Yükleyin

```bash
npm install
```

### 4. Uygulamayı Başlatın

```bash
npm start
```

Tarayıcınızda http://localhost:3000 adresine giderek uygulamayı görüntüleyebilirsiniz.

## 🛠️ Kullanılan Teknolojiler

- React.js – Arayüzü oluşturmak için
- CSS – Stil ve düzenlemeler için
- LocalStorage – Verilerin kalıcı olarak saklanması için

## 🤝 Katkı

Bu projeye katkıda bulunmak için:

```bash
# Repoyu fork'layın
# Yeni bir branch oluşturun
git checkout -b yeni-ozellik

# Değişikliklerinizi yapın ve commit edin
git commit -m "Yeni özellik eklendi"

# Push yapın
git push origin yeni-ozellik
```

Daha sonra bir **Pull Request** gönderin.

## 📜 Lisans

Bu proje MIT lisansı ile lisanslanmıştır.
